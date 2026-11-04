// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 채민성(2651069)
const titles = ["극장판 치이카와: 인어 섬의 비밀", "F1 더 무비", "분노의 질주: 더 세븐", "그란 투리스모", "라이언 일병 구하기"];
const ratings = [7.4, 7.83, 7.2, 7.69, 8.24];
const years = [2026, 2025, 2015, 2023, 1998];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);
let max = ratings[0]
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++){
    if (ratings[i] >= 8) count++;
    if (ratings[i] > max){
        max = ratings[i];
        maxIndex = i;
    }
}
// console.log("최고:", titles[maxIndex], max);
// console.log("8점 이상:", count + "편");
console.log(`최고: ${titles[maxIndex]} ${max}`);
console.log(`8점 이상: ${count}편`);

for (let i = 0; i < ratings.length; i++) {
    let label;
    if (ratings[i] >= 8.5) {
        label = "명작";
        console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    }
    else if (ratings[i] >= 7) {
        label = "추천";
        console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
    }
    else{
        label = "보통";
        console.log(titles[i], ratings[i], label);
    }
}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);