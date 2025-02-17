/** @type {import("prettier").Config} */
module.exports = {
    semi: false, // 세미콜론 사용 X
    singleQuote: true, // 작은따옴표 사용
    trailingComma: 'all', // 여러 줄에서 마지막 쉼표 포함
    bracketSpacing: true, // 객체 리터럴에서 괄호 사이 공백 추가
    jsxSingleQuote: false, // JSX에서 작은따옴표 사용 여부
    printWidth: 100, // 한 줄 최대 길이
    tabWidth: 2, // 탭 간격
    useTabs: false, // 스페이스 사용
    arrowParens: 'always', // 화살표 함수 괄호 유지
    endOfLine: 'lf', // 개행 스타일 (LF)
    importOrder: [
        '^react$',
        '^react/.*$',
        '^highcharts/highstock$',
        '^@?\\w',
        '^#assets/.*$',
        '^#/.*$',
        '^[./]'
    ], // import 순서 정의
    importOrderSeparation: true, // 그룹 간 개행 추가
    importOrderSortSpecifiers: true, // import 멤버 정렬
}