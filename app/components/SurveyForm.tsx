'use client'

import { useState } from 'react';

interface SurveyData {
  nickname: string;
  vibeKnowledge: string;
  reason: string;
  paymentOk: string;
  attendance: string;
  serviceIdea: string;
}

interface SurveyFormProps {
  onClose: () => void;
}

export default function SurveyForm({ onClose }: SurveyFormProps) {
  const [formData, setFormData] = useState<SurveyData>({
    nickname: '',
    vibeKnowledge: '',
    reason: '',
    paymentOk: '',
    attendance: '',
    serviceIdea: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('설문 제출에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('설문 제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-4">설문 제출 완료!</h2>
          <p className="text-gray-600 mb-6">
            설문에 참여해주셔서 감사합니다.<br/>
            빠른 시일 내에 연락드리겠습니다.
          </p>
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">바이브코딩 스터디 신청</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. 닉네임 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              1. 닉네임이 어떻게 되실까요?
            </label>
            <input
              type="text"
              value={formData.nickname}
              onChange={(e) => handleInputChange('nickname', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="닉네임을 입력해주세요"
              required
            />
          </div>

          {/* 2. 바이브코딩 지식 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              2. 바이브코딩에 대해 얼마나 알고 계시나요?
            </label>
            <div className="space-y-2">
              {[
                '잘 모른다',
                '들어는 보았다',
                '한번 정도는 이용해봄',
                '자주 이용해봄'
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="vibeKnowledge"
                    value={option}
                    checked={formData.vibeKnowledge === option}
                    onChange={(e) => handleInputChange('vibeKnowledge', e.target.value)}
                    className="mr-2"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 3. 이유 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              3. 바이브 코딩을 배워보고 싶으신 이유는 무엇인가요?
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => handleInputChange('reason', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              placeholder="바이브코딩을 배우고 싶은 이유를 자유롭게 작성해주세요 (최대 500자)"
              maxLength={500}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.reason.length}/500
            </div>
          </div>

          {/* 4. 결제 의향 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              4. 바이브코딩을 하는 동안 필요에 따른 결제, 지출도 괜찮으실까요?<br/>
              <span className="text-sm text-gray-600">(예시: 커서 결제 등)</span>
            </label>
            <div className="space-y-2">
              {[
                '얼마든지요',
                '가격이 비싸면 못해요',
                '무료만 할 수 없을까요'
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOk"
                    value={option}
                    checked={formData.paymentOk === option}
                    onChange={(e) => handleInputChange('paymentOk', e.target.value)}
                    className="mr-2"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 5. 참여 동의 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              5. 바이브코딩 스터디는 매주 1회 진행되며, 100% 참여 가능한 분만 모집합니다. 동의하시나요?
            </label>
            <div className="space-y-2">
              {[
                '네',
                '아니요'
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={formData.attendance === option}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="mr-2"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 6. 서비스 아이디어 */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              6. 마지막으로 만들어보고 싶은 서비스는?
            </label>
            <textarea
              value={formData.serviceIdea}
              onChange={(e) => handleInputChange('serviceIdea', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              placeholder="만들어보고 싶은 서비스나 아이디어를 자유롭게 작성해주세요 (최대 500자)"
              maxLength={500}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.serviceIdea.length}/500
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '제출 중...' : '설문 제출하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 