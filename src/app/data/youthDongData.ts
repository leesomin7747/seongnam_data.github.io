export interface YouthDongData {
  dong: string;
  totalPopulation: number;
  teenPopulation: number;
  youthPopulation: number;
  performanceVenues: number;
  cinemas: number;
  status: '공급 부족' | '양호';
}

export const youthDongs: YouthDongData[] = [
  { dong: "신흥1동", totalPopulation: 203572, teenPopulation: 24387, youthPopulation: 42331, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "신흥2동", totalPopulation: 469833, teenPopulation: 78388, youthPopulation: 93191, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "신흥3동", totalPopulation: 905794, teenPopulation: 131466, youthPopulation: 184268, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "태평1동", totalPopulation: 232389, teenPopulation: 28691, youthPopulation: 48746, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "태평2동", totalPopulation: 11797, teenPopulation: 1318, youthPopulation: 2599, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "태평3동", totalPopulation: 16089, teenPopulation: 2335, youthPopulation: 3528, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "태평4동", totalPopulation: 27981, teenPopulation: 3651, youthPopulation: 5811, performanceVenues: 0, cinemas: 10, status: "양호" },
  { dong: "수진1동", totalPopulation: 26767, teenPopulation: 3485, youthPopulation: 5520, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "수진2동", totalPopulation: 19608, teenPopulation: 2032, youthPopulation: 3707, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "단대동", totalPopulation: 23438, teenPopulation: 2826, youthPopulation: 5088, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "산성동", totalPopulation: 14162, teenPopulation: 1772, youthPopulation: 2729, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "양지동", totalPopulation: 25878, teenPopulation: 4148, youthPopulation: 4721, performanceVenues: 1, cinemas: 0, status: "양호" },
  { dong: "복정동", totalPopulation: 26316, teenPopulation: 4555, youthPopulation: 5222, performanceVenues: 1, cinemas: 7, status: "양호" },
  { dong: "위례동", totalPopulation: 10453, teenPopulation: 1637, youthPopulation: 3584, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "신촌동", totalPopulation: 24396, teenPopulation: 4200, youthPopulation: 4955, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "고등동", totalPopulation: 4421, teenPopulation: 561, youthPopulation: 837, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "시흥동", totalPopulation: 23593, teenPopulation: 4099, youthPopulation: 4351, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "성남동", totalPopulation: 22454, teenPopulation: 2460, youthPopulation: 4440, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "중앙동", totalPopulation: 2911, teenPopulation: 338, youthPopulation: 524, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "금광1동", totalPopulation: 11054, teenPopulation: 1132, youthPopulation: 2014, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "금광2동", totalPopulation: 30649, teenPopulation: 5801, youthPopulation: 6373, performanceVenues: 0, cinemas: 10, status: "양호" },
  { dong: "은행1동", totalPopulation: 17273, teenPopulation: 3118, youthPopulation: 3472, performanceVenues: 1, cinemas: 0, status: "양호" },
  { dong: "은행2동", totalPopulation: 31835, teenPopulation: 3157, youthPopulation: 8361, performanceVenues: 0, cinemas: 6, status: "양호" },
  { dong: "상대원1동", totalPopulation: 17879, teenPopulation: 3334, youthPopulation: 3523, performanceVenues: 2, cinemas: 0, status: "양호" },
  { dong: "상대원2동", totalPopulation: 10381, teenPopulation: 2739, youthPopulation: 1294, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "상대원3동", totalPopulation: 13191, teenPopulation: 3111, youthPopulation: 2524, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "하대원동", totalPopulation: 10775, teenPopulation: 858, youthPopulation: 1988, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "도촌동", totalPopulation: 14334, teenPopulation: 1491, youthPopulation: 2952, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "분당동", totalPopulation: 3548, teenPopulation: 274, youthPopulation: 1150, performanceVenues: 1, cinemas: 7, status: "양호" },
  { dong: "수내1동", totalPopulation: 4511, teenPopulation: 717, youthPopulation: 1257, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "수내2동", totalPopulation: 12046, teenPopulation: 1125, youthPopulation: 2445, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "수내3동", totalPopulation: 31635, teenPopulation: 3828, youthPopulation: 6128, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "정자동", totalPopulation: 10670, teenPopulation: 1000, youthPopulation: 2315, performanceVenues: 0, cinemas: 9, status: "양호" },
  { dong: "정자1동", totalPopulation: 16525, teenPopulation: 1985, youthPopulation: 3729, performanceVenues: 0, cinemas: 8, status: "양호" },
  { dong: "정자2동", totalPopulation: 15564, teenPopulation: 2528, youthPopulation: 2673, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "정자3동", totalPopulation: 26618, teenPopulation: 2956, youthPopulation: 5933, performanceVenues: 1, cinemas: 0, status: "공급 부족" },
  { dong: "서현1동", totalPopulation: 8923, teenPopulation: 1291, youthPopulation: 1790, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "서현2동", totalPopulation: 38266, teenPopulation: 6141, youthPopulation: 6689, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "이매1동", totalPopulation: 45473, teenPopulation: 7178, youthPopulation: 7818, performanceVenues: 0, cinemas: 7, status: "양호" },
  { dong: "이매2동", totalPopulation: 9289, teenPopulation: 1316, youthPopulation: 2280, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "야탑1동", totalPopulation: 20978, teenPopulation: 2547, youthPopulation: 4411, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "야탑2동", totalPopulation: 24537, teenPopulation: 4402, youthPopulation: 4694, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "야탑3동", totalPopulation: 12796, teenPopulation: 2497, youthPopulation: 2138, performanceVenues: 3, cinemas: 0, status: "양호" },
  { dong: "판교동", totalPopulation: 30247, teenPopulation: 5092, youthPopulation: 7045, performanceVenues: 2, cinemas: 0, status: "양호" },
  { dong: "삼평동", totalPopulation: 14183, teenPopulation: 1785, youthPopulation: 3145, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "백현동", totalPopulation: 16467, teenPopulation: 2990, youthPopulation: 3257, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "금곡동", totalPopulation: 13750, teenPopulation: 2159, youthPopulation: 3298, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "구미1동", totalPopulation: 16585, teenPopulation: 1950, youthPopulation: 2923, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "구미동", totalPopulation: 13522, teenPopulation: 1521, youthPopulation: 3457, performanceVenues: 0, cinemas: 0, status: "공급 부족" },
  { dong: "운중동", totalPopulation: 13628, teenPopulation: 1489, youthPopulation: 3039, performanceVenues: 1, cinemas: 0, status: "양호" },
];