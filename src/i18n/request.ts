import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '../config/i18n';

// 한국어와 일본어 메시지 파일 직접 가져오기
import koMessages from '../messages/ko.json';
import jaMessages from '../messages/ja.json';

const messages = {
  ko: koMessages,
  ja: jaMessages
};

export default getRequestConfig(async ({ locale }) => {
  // 지원하지 않는 언어 체크
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    // 직접 가져온 메시지 객체 사용
    messages: messages[locale as keyof typeof messages]
  };
}); 