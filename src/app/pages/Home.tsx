import { Link } from "react-router";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import { dongs, getTotalChildren, getTotalYouth, getTotalElderly } from "../data/dongData";
import { Users, Baby, Briefcase, Heart } from "lucide-react";

const TARGET_POPULATION = 905493;

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 80;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

const top3Children = [...dongs]
  .sort((a, b) => b.population.children - a.population.children)
  .slice(0, 3);

const top3Youth = [...dongs]
  .sort((a, b) => b.population.youth - a.population.youth)
  .slice(0, 3);

const top3Elderly = [...dongs]
  .sort((a, b) => b.population.elderly - a.population.elderly)
  .slice(0, 3);

interface TooltipItem {
  name: string;
  value: number;
}

function PopCard({
  icon,
  label,
  value,
  gradient,
  border,
  iconBg,
  textColor,
  tooltipItems,
  tooltipColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  gradient: string;
  border: string;
  iconBg: string;
  textColor: string;
  tooltipItems: TooltipItem[];
  tooltipColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-6 shadow-sm ${border} cursor-default`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-3`}>
          {icon}
        </div>
        <p className="text-xs text-gray-500 mb-2">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}만</p>
      </div>

      {hovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
          <p className={`text-xs font-semibold ${textColor} mb-3`}>인구 Top3</p>
          <div className="space-y-2">
            {tooltipItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 ${tooltipColor} rounded-full text-white text-xs flex items-center justify-center font-bold`}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                </div>
                <span className="text-sm text-gray-500">{item.value.toLocaleString()}명</span>
              </div>
            ))}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -mt-1.5" />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const totalPopulation = useCountUp(TARGET_POPULATION);
  const totalChildren = getTotalChildren();
  const totalYouth = getTotalYouth();
  const totalElderly = getTotalElderly();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              성남시 공공시설 수요 분석
            </h1>
            <p className="text-gray-500">각 동을 클릭하여 상세 분석을 확인하세요</p>
          </div>
          <Link
            to="/overview"
            className="px-6 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
          >
            한눈에 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-3xl p-8 shadow-sm border border-sky-100" style={{ minHeight: "280px" }}>
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-gray-500">총 인구</p>
                    <p className="text-5xl font-semibold text-gray-900">
                      {totalPopulation.toLocaleString()}명
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <PopCard
                icon={<Baby className="w-6 h-6 text-white" />}
                label="아동 인구"
                value={(totalChildren / 10000).toFixed(1)}
                gradient="from-pink-50 to-white"
                border="border border-pink-100"
                iconBg="bg-pink-500"
                textColor="text-pink-600"
                tooltipColor="bg-pink-500"
                tooltipItems={top3Children.map((d) => ({ name: d.name, value: d.population.children }))}
              />
              <PopCard
                icon={<Briefcase className="w-6 h-6 text-white" />}
                label="청년 인구"
                value={(totalYouth / 10000).toFixed(0)}
                gradient="from-purple-50 to-white"
                border="border border-purple-100"
                iconBg="bg-purple-500"
                textColor="text-purple-600"
                tooltipColor="bg-purple-500"
                tooltipItems={top3Youth.map((d) => ({ name: d.name, value: d.population.youth }))}
              />
              <PopCard
                icon={<Heart className="w-6 h-6 text-white" />}
                label="노인 인구"
                value={(totalElderly / 10000).toFixed(1)}
                gradient="from-orange-50 to-white"
                border="border border-orange-100"
                iconBg="bg-orange-500"
                textColor="text-orange-600"
                tooltipColor="bg-orange-500"
                tooltipItems={top3Elderly.map((d) => ({ name: d.name, value: d.population.elderly }))}
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">성남시 행정구역 지도</h2>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}