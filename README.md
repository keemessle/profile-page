# **웹클라이언트 컴퓨팅 기말 프로젝트 👩🏻‍💻☘️**
웹 클라이언트 컴퓨팅 강의 중에 배웠던 내용을 토대로  ***"HTML, CSS, 자바스크립트"*** 만 사용하여 동적 웹페이지를 만드는 기말 프로젝트입니다.



## **🌟 프로젝트 소개**
자율 주제였기 때문에 "자기소개 페이지"를 주제로 하여 나에 대한 웹 사이트를 만드는 것을 목표로 하였습니다. 



## **❣️ 결과 화면**

###### home : 첫 화면

<img width="1469" alt="home" src="https://github.com/user-attachments/assets/b8e63957-afa3-445c-87a7-b5b6bd39c687" />

###### about : 기본 정보

<img width="1470" alt="about" src="https://github.com/user-attachments/assets/4d8b7cc7-9eab-4133-93da-a7aa4863ea30" />

###### project : 지금까지 진행했던 프로젝트 (수정일:2025.02)

<img width="1470" alt="project" src="https://github.com/user-attachments/assets/cb038d18-2844-41c6-a3b9-46d41875b4d9" />

###### contact : 연락할 수 있는 수단

<img width="1470" alt="contact" src="https://github.com/user-attachments/assets/23d132a6-615d-4910-bb98-a3edc3d40c25" /><br/>



## **📌 주요 기능**
✅ 싱글 페이지 구성
  * 새 창 없이 스크롤로 화면을 전환하는 싱글 페이지 웹사이트(SPA)
  *  home, about, project, contact 총 4개의 섹션으로 구성
  *  시맨틱 태그(header, main, footer 등)를 활용한 HTML 구조
✅ 부드러운 스크롤 이동
  * scroll-behavior: smooth 속성을 활용해 자연스러운 화면 전환
  * 메뉴 클릭 시 해당 섹션으로 스크롤 이동되도록 구현
✅ Home - 타이핑 애니메이션
  * 텍스트가 한 글자씩 나타나는 타이핑 효과
  * JavaScript로 구현:
    * DOM 조작: document.querySelector, innerHTML
    * 문자열 인덱싱: text[textIdx++]
    * 반복 실행: setInterval
    * 조건 분기 및 초기화
✅ About - 스크롤 애니메이션
  * 스크롤에 반응하여 카드가 슬라이딩 되는 애니메이션 효과
  * 구현 방식:
    * JavaScript scroll 이벤트 감지: window.addEventListener("scroll", ...)
    * CSS @keyframes 애니메이션
    * DOM 조작: element.style.animation
    * 스크롤 위치 값에 따라 등장/사라짐 제어
✅ Project - 커스텀 슬라이드
  * 프로젝트를 슬라이드 형태로 보여주는 커스텀 멀티 슬라이더
  * JavaScript로 구현:
    * DOM 선택: querySelector, querySelectorAll
    * 동적 스타일 조작: element.style.left
    * 인덱스 기반 슬라이드 계산: (슬라이드 너비 + 마진) * 인덱스
    * 좌/우 버튼 제어, 순환 기능
✅ Contact - 섹션 등장 애니메이션
  * 스크롤 시 텍스트가 위로 올라오며 등장하는 슬라이딩 애니메이션
  * About 섹션과 동일한 방식의 JavaScript + CSS 조합 애니메이션



## **🛠️ 기술 스택** 
- HTML5
- CSS3
- JavaScript
- Node.js



## **⏳ 개발 기간**
- 2023.06.01 ~ 2023.06.25 (25일)











