interface StatisticCardProps {
    value: string;
    label: string;
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    valueColor: string;
}

export const StatisticCard = ({ value, label, gradientFrom, gradientTo, borderColor, valueColor }: StatisticCardProps) => {
    return (
        <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl p-6 border ${borderColor} text-center`}>
            <div className={`text-3xl font-bold ${valueColor} mb-2`}>{value}</div>
            <p className="text-gray-300">{label}</p>
        </div>
    );
};
