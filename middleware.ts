import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './src/config/i18n';

export default createMiddleware({
  // 기본 로케일
  defaultLocale,
  // 지원하는 로케일
  locales,
  // 사용자의 선호 로케일 감지 여부
  localeDetection: true,
  // 로케일 변경 시 저장할 쿠키 이름
  localePrefix: 'as-needed'
});

export const config = {
  // 미들웨어를 적용할 경로 패턴
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 