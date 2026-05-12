export interface ElderlyDongData {
  dong: string;
  elderlyPopulation: number;
  facilityCount: number;
  medicalWelfareFacilities: number;
  housingWelfareFacilities: number;
  welfareCenters: number;
  demandScore: number;
  status: '공급 부족' | '양호';
}

export const elderlyDongs: ElderlyDongData[] = [
  { dong: "금광2동", elderlyPopulation: 5325, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 247.85506, status: "공급 부족" },
  { dong: "위례동", elderlyPopulation: 7203, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 245.089202, status: "공급 부족" },
  { dong: "은행2동", elderlyPopulation: 5245, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 244.131416, status: "공급 부족" },
  { dong: "신흥2동", elderlyPopulation: 5183, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 241.245592, status: "공급 부족" },
  { dong: "서현1동", elderlyPopulation: 4457, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 207.453522, status: "공급 부족" },
  { dong: "구미동", elderlyPopulation: 6047, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 205.755158, status: "공급 부족" },
  { dong: "야탑3동", elderlyPopulation: 5447, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 202.388078, status: "공급 부족" },
  { dong: "이매1동", elderlyPopulation: 3969, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 184.739293, status: "공급 부족" },
  { dong: "금곡동", elderlyPopulation: 5701, facilityCount: 2, medicalWelfareFacilities: 1, housingWelfareFacilities: 1, welfareCenters: 0, demandScore: 172.251882, status: "공급 부족" },
  { dong: "백현동", elderlyPopulation: 4162, facilityCount: 1, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 1, demandScore: 164.831844, status: "공급 부족" },
  { dong: "하대원동", elderlyPopulation: 4350, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 161.628077, status: "공급 부족" },
  { dong: "분당동", elderlyPopulation: 4309, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 160.104686, status: "공급 부족" },
  { dong: "상대원1동", elderlyPopulation: 5274, facilityCount: 2, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 1, demandScore: 159.350365, status: "공급 부족" },
  { dong: "야탑1동", elderlyPopulation: 3405, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 158.487602, status: "공급 부족" },
  { dong: "도촌동", elderlyPopulation: 4712, facilityCount: 3, medicalWelfareFacilities: 3, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 152.95644, status: "양호" },
  { dong: "단대동", elderlyPopulation: 3284, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 152.85559, status: "공급 부족" },
  { dong: "운중동", elderlyPopulation: 4488, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 152.708641, status: "양호" },
  { dong: "중앙동", elderlyPopulation: 3220, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 149.876675, status: "공급 부족" },
  { dong: "삼평동", elderlyPopulation: 3186, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 148.294126, status: "공급 부족" },
  { dong: "신흥1동", elderlyPopulation: 3114, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 144.942847, status: "공급 부족" },
  { dong: "정자1동", elderlyPopulation: 4242, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 144.338247, status: "양호" },
  { dong: "판교동", elderlyPopulation: 3080, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 143.360298, status: "공급 부족" },
  { dong: "수진2동", elderlyPopulation: 3952, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 134.47071, status: "양호" },
  { dong: "태평1동", elderlyPopulation: 3549, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 131.866218, status: "공급 부족" },
  { dong: "서현2동", elderlyPopulation: 2778, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 129.303541, status: "공급 부족" },
  { dong: "성남동", elderlyPopulation: 7149, facilityCount: 6, medicalWelfareFacilities: 4, housingWelfareFacilities: 1, welfareCenters: 1, demandScore: 126.101017, status: "양호" },
  { dong: "태평2동", elderlyPopulation: 3341, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 124.137795, status: "공급 부족" },
  { dong: "신흥3동", elderlyPopulation: 2572, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 119.715158, status: "공급 부족" },
  { dong: "야탑2동", elderlyPopulation: 3486, facilityCount: 3, medicalWelfareFacilities: 3, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 113.1592, status: "양호" },
  { dong: "태평3동", elderlyPopulation: 3013, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 111.950666, status: "양호" },
  { dong: "구미1동", elderlyPopulation: 2792, facilityCount: 1, medicalWelfareFacilities: 0, housingWelfareFacilities: 1, welfareCenters: 0, demandScore: 110.574365, status: "양호" },
  { dong: "상대원3동", elderlyPopulation: 2970, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 110.352963, status: "양호" },
  { dong: "정자동", elderlyPopulation: 2337, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 108.776953, status: "공급 부족" },
  { dong: "정자2동", elderlyPopulation: 2840, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 105.522699, status: "양호" },
  { dong: "양지동", elderlyPopulation: 2183, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 101.608938, status: "공급 부족" },
  { dong: "금광1동", elderlyPopulation: 2897, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 98.573291, status: "양호" },
  { dong: "태평4동", elderlyPopulation: 2627, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 97.608496, status: "양호" },
  { dong: "수내1동", elderlyPopulation: 2572, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 95.564923, status: "양호" },
  { dong: "은행1동", elderlyPopulation: 1912, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 88.995094, status: "공급 부족" },
  { dong: "고등동", elderlyPopulation: 1810, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 84.247448, status: "공급 부족" },
  { dong: "이매2동", elderlyPopulation: 2433, facilityCount: 2, medicalWelfareFacilities: 2, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 82.785232, status: "양호" },
  { dong: "정자3동", elderlyPopulation: 2514, facilityCount: 2, medicalWelfareFacilities: 0, housingWelfareFacilities: 1, welfareCenters: 1, demandScore: 82.113392, status: "양호" },
  { dong: "수진1동", elderlyPopulation: 3166, facilityCount: 4, medicalWelfareFacilities: 3, housingWelfareFacilities: 1, welfareCenters: 0, demandScore: 80.794712, status: "양호" },
  { dong: "수내3동", elderlyPopulation: 1555, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 72.378332, status: "공급 부족" },
  { dong: "수내2동", elderlyPopulation: 1244, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 57.902666, status: "공급 부족" },
  { dong: "산성동", elderlyPopulation: 1121, facilityCount: 1, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 1, demandScore: 44.396083, status: "양호" },
  { dong: "복정동", elderlyPopulation: 1356, facilityCount: 2, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 1, demandScore: 40.970628, status: "양호" },
  { dong: "신촌동", elderlyPopulation: 608, facilityCount: 0, medicalWelfareFacilities: 0, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 28.299695, status: "공급 부족" },
  { dong: "상대원2동", elderlyPopulation: 711, facilityCount: 1, medicalWelfareFacilities: 1, housingWelfareFacilities: 0, welfareCenters: 0, demandScore: 26.417831, status: "양호" },
  { dong: "시흥동", elderlyPopulation: 729, facilityCount: 2, medicalWelfareFacilities: 1, housingWelfareFacilities: 1, welfareCenters: 0, demandScore: 22.026245, status: "양호" },
];