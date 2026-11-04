// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["극장판 치이카와: 인어 섬의 비밀", "F1 더 무비", "분노의 질주: 더 세븐", "그란 투리스모제목4", "라이언 일병 구하기"];
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



















































// document.write("외부스크립트 방법");

// console.log("콘솔 창에 나와야 하는 내용");

// var num = 10 + 20;

// console.log(num);
// let sum = 80 + 1234;
// console.log(sum);

// let string = "Hello World";
// let string2 = "시네마 웹사이트 'Cinema website'에 오신것을 환영합니다";
// console.log(string, string2);

// let dan = 3;
// let gugu = 8;
// let string3 = '${dan}단 ${gugu}는 ${dan * gugu}입니다';
// console.log(string3);

// let studentscount = [80, 70, 90, 60];

// console.log(studentscount);
// console.log(studentscount[2]);

// let stdscore = {
//     koreanScore: 80,
//     englishScore: 70,
//     mathScore: 90,
//     scienceScore: 60
// };
// console.log(stdscore);
// console.log(stdscore.koreanScore);

// dan = 2
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 3
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 4
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 5
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 6
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 7
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 8
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }
// console.log("  ");
// dan = 9
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }