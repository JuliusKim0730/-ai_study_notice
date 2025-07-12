export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">바이브코딩 스터디</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            PM의 손끝으로 MVP를 만들다 – 코딩 없이 직접 개발하는 4주 실습 스터디
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              → 스터디 신청하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              → 커리큘럼 보기
            </button>
          </div>
        </div>
      </section>

      {/* 스터디 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">이 스터디, 이런 분에게 딱입니다!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">PM</h3>
              <p className="text-gray-600">웹이나 앱을 직접 만들고 싶은 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-semibold mb-2">기획자</h3>
              <p className="text-gray-600">개발자에게 맡기기 전, 먼저 프로토타입을 만들고 싶은 기획자</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2">실전 경험자</h3>
              <p className="text-gray-600">Firebase, Vercel, API 등을 실전으로 다뤄보고 싶은 분</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">사이드 프로젝터</h3>
              <p className="text-gray-600">나만의 프로젝트를 직접 만들고 싶은 사이드 프로젝트 입문자</p>
            </div>
          </div>
        </div>
      </section>

      {/* 스터디 개요 섹션 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">📍 진행 방식</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-2">매주 2시간</h3>
              <p className="text-gray-600">온라인 또는 오프라인 병행</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">💻</span>
              </div>
              <h3 className="font-semibold mb-2">커서 기반</h3>
              <p className="text-gray-600">실시간 실습 중심</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🛠️</span>
              </div>
              <h3 className="font-semibold mb-2">설명 + 실습</h3>
              <p className="text-gray-600">매주 10~15분 설명 후, 직접 실습 진행</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">배포 & 공유</h3>
              <p className="text-gray-600">실습 결과물은 직접 배포 & 공유까지!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 커리큘럼 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">📚 커리큘럼</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                <h3 className="text-xl font-semibold">1주차 - 이력서 사이트 제작</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• 커서로 간단한 웹 UI 만들기</li>
                <li>• 나만의 텍스트 입력형 이력서 제작</li>
                <li>• Firebase 연동 준비</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                <h3 className="text-xl font-semibold">2주차 - Firebase 연동 & 배포</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Firebase에 이력서 저장/불러오기</li>
                <li>• 수동/자동 이력서 입력 기능 구현</li>
                <li>• Firebase Hosting 및 Vercel 배포 실습</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                <h3 className="text-xl font-semibold">3주차 - 기능 확장 & 로그인</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Google SSO 로그인 연동</li>
                <li>• 외부 컴포넌트(위지윅 에디터 등) 활용</li>
                <li>• 사용자별 데이터 구분 저장</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                <h3 className="text-xl font-semibold">4주차 - 외부 API 연결</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• 날씨, 뉴스, 채용 정보 등 외부 API 연결</li>
                <li>• 최종 배포 및 스터디원 발표</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              → 샘플 사이트 보기
            </button>
          </div>
        </div>
      </section>

      {/* 참가 안내 섹션 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">📝 참가 방법</h2>
          <div className="bg-white border-2 border-blue-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-lg">참여 방식</h3>
                <p className="text-gray-600 mb-4">온라인 & 오프라인 선택 가능</p>
                
                <h3 className="font-semibold mb-4 text-lg">준비물</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cursor 계정</li>
                  <li>• Chrome 브라우저</li>
                  <li>• Google 계정</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-lg">스터디 일정</h3>
                <p className="text-gray-600 mb-4">매주 2시간 (요일/시간 추후 안내)</p>
                
                <h3 className="font-semibold mb-4 text-lg">참가비</h3>
                <p className="text-gray-600">무료</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                → 스터디 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">❓ 자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Q. 개발을 몰라도 참여할 수 있나요?</h3>
                <p className="text-gray-600">A. 네! 커서는 비개발자도 쉽게 사용할 수 있는 시각적 웹 개발 툴입니다.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Q. 온라인 참여만 가능한가요?</h3>
                <p className="text-gray-600">A. 온라인만 참여해도 충분히 실습 가능합니다. 화면 공유로 같이 코딩해요!</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="font-semibold mb-2">Q. 꼭 이력서 말고 다른 것도 만들 수 있나요?</h3>
                <p className="text-gray-600">A. 물론입니다! 아이디어만 있다면 어떤 서비스든 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 섹션 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">바이브코딩 스터디</h3>
            <div className="space-y-2 text-gray-300">
              <p>스터디 주최: PM들의 수다</p>
              <p>커서 기반 실습 & 운영: 김민균 (15년차 기획자, AI/게임/PM)</p>
              <p>문의: [이메일/디스코드/노션 링크]</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2024 바이브코딩 스터디. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
