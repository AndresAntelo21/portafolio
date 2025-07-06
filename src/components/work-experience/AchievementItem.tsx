interface AchievementItemProps {
    highlight: string;
    text: string;
    colorClass: string;
}

const getTextColor = (bgColor: string): string => {
    const colorMap: { [key: string]: string } = {
        'bg-blue-500': 'text-blue-400',
        'bg-green-500': 'text-green-400',
        'bg-purple-500': 'text-purple-400',
        'bg-indigo-500': 'text-indigo-400',
        'bg-teal-500': 'text-teal-400',
        'bg-cyan-500': 'text-cyan-400',
        'bg-orange-500': 'text-orange-400',
        'bg-red-500': 'text-red-400',
        'bg-yellow-500': 'text-yellow-400',
        'bg-pink-500': 'text-pink-400',
    };

    return colorMap[bgColor] || bgColor.replace('bg-', 'text-');
};

export const AchievementItem = ({ highlight, text, colorClass }: AchievementItemProps) => {
    const textColor = getTextColor(colorClass);

    return (
        <div className="flex items-start gap-3">
            <div className={`w-2 h-2 ${colorClass} rounded-full mt-2 flex-shrink-0`}></div>
            <p className="text-gray-300">
                <span className={`${textColor} font-semibold`}>{highlight}</span> {text}
            </p>
        </div>
    );
};
