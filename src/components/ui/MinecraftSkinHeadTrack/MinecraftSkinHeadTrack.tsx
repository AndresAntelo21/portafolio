import { useLayoutEffect, useRef } from "react";
import { createOrbitControls, SkinViewer } from "skinview3d";
import type { PlayerObject } from "skinview3d";

export type MinecraftSkinHeadTrackProps = {
  skin: string;
  width: number;
  height: number;
  className?: string;
};

const MAX_YAW = 0.62;
const MAX_PITCH = 0.44;
/** Screen Y of look origin inside the canvas (0 top, 1 bottom). */
const LOOK_ORIGIN_Y = 0.33;

export function MinecraftSkinHeadTrack({
  skin,
  width,
  height,
  className,
}: MinecraftSkinHeadTrackProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const skinViewer = new SkinViewer({
      skin,
      width,
      height,
      canvas,
    });

    const controls = createOrbitControls(skinViewer);
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.enableZoom = true;

    const look = { yaw: 0, pitch: 0 };

    const applyLook = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 4 || rect.height < 4) return;

      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * LOOK_ORIGIN_Y;
      const dx = clientX - cx;
      const dy = clientY - cy;

      const zDepth = Math.max(rect.width, rect.height) * 0.62;

      // Inverted horizontal: cursor left → head looks right (and vice versa).
      let yaw = Math.atan2(dx, zDepth);
      let pitch = Math.atan2(dy, zDepth);

      yaw = Math.max(-MAX_YAW, Math.min(MAX_YAW, yaw));
      pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch));

      look.yaw = yaw;
      look.pitch = pitch;
    };

    const syncHead = (player: PlayerObject) => {
      controls.update();
      const head = player.skin.head;
      head.rotation.order = "YXZ";
      head.rotation.y = look.yaw;
      head.rotation.x = look.pitch;
    };

    const headAnim = skinViewer.animations.add(syncHead);

    const onPointerMove = (e: PointerEvent) => {
      applyLook(e.clientX, e.clientY);
    };

    const listenerOpts: AddEventListenerOptions = { passive: true };
    window.addEventListener("pointermove", onPointerMove, listenerOpts);

    return () => {
      window.removeEventListener("pointermove", onPointerMove, listenerOpts);
      headAnim.remove();
      controls.dispose();
      skinViewer.dispose();
    };
  }, [skin, width, height]);

  return <canvas ref={canvasRef} className={className} />;
}
