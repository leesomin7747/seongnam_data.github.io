export interface District {
  id: string;
  name: string;
  population: {
    total: number;
    children: number;
    youth: number;
    elderly: number;
  };
  facilities: {
    childcare: number;
    youthCenter: number;
    elderlyCenter: number;
  };
  demand: {
    children: number;
    youth: number;
    elderly: number;
  };
  coordinates: { x: number; y: number }[];
}

export const districts: District[] = [
  {
    id: "sujeong",
    name: "수정구",
    population: { total: 210000, children: 28000, youth: 95000, elderly: 42000 },
    facilities: { childcare: 25, youthCenter: 8, elderlyCenter: 18 },
    demand: { children: 75, youth: 60, elderly: 85 },
    coordinates: [
      { x: 120, y: 80 },
      { x: 280, y: 80 },
      { x: 280, y: 240 },
      { x: 120, y: 240 },
    ],
  },
  {
    id: "jungwon",
    name: "중원구",
    population: { total: 230000, children: 32000, youth: 105000, elderly: 38000 },
    facilities: { childcare: 32, youthCenter: 12, elderlyCenter: 15 },
    demand: { children: 65, youth: 80, elderly: 70 },
    coordinates: [
      { x: 280, y: 80 },
      { x: 440, y: 80 },
      { x: 440, y: 240 },
      { x: 280, y: 240 },
    ],
  },
  {
    id: "bundang",
    name: "분당구",
    population: { total: 460000, children: 68000, youth: 220000, elderly: 85000 },
    facilities: { childcare: 58, youthCenter: 18, elderlyCenter: 28 },
    demand: { children: 85, youth: 70, elderly: 95 },
    coordinates: [
      { x: 120, y: 240 },
      { x: 440, y: 240 },
      { x: 440, y: 420 },
      { x: 120, y: 420 },
    ],
  },
];

export const getTotalPopulation = () => {
  return districts.reduce((sum, d) => sum + d.population.total, 0);
};

export const getTotalChildren = () => {
  return districts.reduce((sum, d) => sum + d.population.children, 0);
};

export const getTotalYouth = () => {
  return districts.reduce((sum, d) => sum + d.population.youth, 0);
};

export const getTotalElderly = () => {
  return districts.reduce((sum, d) => sum + d.population.elderly, 0);
};

export const getRecommendations = (district: District) => {
  const recommendations = [];

  if (district.demand.elderly > 80 && district.demand.children < 70) {
    recommendations.push({
      title: "아동 돌봄센터 → 노인 쉼터 전환 제안",
      description: `${district.name}의 노인 인구 비율이 높고 아동 수요가 낮습니다. 기존 아동 시설 일부를 노인 복지시설로 전환하는 것을 고려하세요.`,
      priority: "high",
    });
  }

  if (district.demand.children > 80 && district.demand.elderly < 75) {
    recommendations.push({
      title: "노인 쉼터 → 아동 돌봄센터 전환 제안",
      description: `${district.name}의 아동 인구가 증가하고 있습니다. 노인 복지시설 일부를 아동 돌봄센터로 전환하여 수요를 충족하세요.`,
      priority: "high",
    });
  }

  if (district.demand.youth > 75) {
    recommendations.push({
      title: "청년 문화공간 확충 필요",
      description: `${district.name}의 청년층이 많습니다. 청년 복합문화공간 및 코워킹 스페이스를 추가로 설치하세요.`,
      priority: "medium",
    });
  }

  if (district.demand.children > 70 && district.facilities.childcare < 30) {
    recommendations.push({
      title: "어린이집 추가 건립",
      description: `${district.name}의 아동 돌봄 시설이 부족합니다. 어린이집 3-5개소 추가 설치가 필요합니다.`,
      priority: "high",
    });
  }

  return recommendations;
};

export const getFacilityStatus = (district: District): "excess" | "shortage" | "normal" => {
  const avgDemand = (district.demand.children + district.demand.youth + district.demand.elderly) / 3;

  if (avgDemand > 80) return "shortage";
  if (avgDemand < 65) return "excess";
  return "normal";
};
