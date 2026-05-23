import { useThemeMode } from '../App';

export const useThemeColors = () => {
  const { isDark } = useThemeMode();

  return {
    isDark,
    // Backgrounds
    pageBg: isDark ? '#06080f' : '#f8f9fc',
    sectionBg: isDark
      ? 'linear-gradient(180deg, rgba(6,8,14,1) 0%, rgba(9,11,18,1) 100%)'
      : 'linear-gradient(180deg, #f8f9fc 0%, #f0f2f8 100%)',
    sectionBgAlt: isDark
      ? 'linear-gradient(180deg, rgba(9,11,18,1) 0%, rgba(8,10,15,1) 100%)'
      : 'linear-gradient(180deg, #f0f2f8 0%, #f8f9fc 100%)',
    cardBg: isDark
      ? 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))'
      : 'linear-gradient(160deg, rgba(255,255,255,0.95), rgba(248,249,252,0.95))',
    cardBgSolid: isDark ? '#0c111c' : '#ffffff',
    inputBg: isDark ? 'rgba(9,12,19,0.76)' : 'rgba(255,255,255,0.9)',
    
    // Borders
    cardBorder: isDark ? '#ff9f1a' : '#e88a00',
    subtleBorder: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    
    // Text
    textPrimary: isDark ? '#f4f7ff' : '#1a1d2e',
    textSecondary: isDark ? '#aeb8ce' : '#5a6480',
    textMuted: isDark ? '#7a859e' : '#8a95af',
    textOnCard: isDark ? '#eef2ff' : '#1a1d2e',
    textBody: isDark ? '#a8b3ca' : '#5a6480',
    textAccentBg: isDark ? '#1a1205' : '#ffffff',
    
    // Accent
    accent: isDark ? '#ff9f1a' : '#e88a00',
    accentBg: isDark ? 'rgba(255,159,26,0.16)' : 'rgba(232,138,0,0.12)',
    accentBgHover: isDark ? 'rgba(255,159,26,0.25)' : 'rgba(232,138,0,0.2)',
    accentBorder: isDark ? 'rgba(255,159,26,0.3)' : 'rgba(232,138,0,0.3)',
    accentChipBg: isDark ? '#302313' : '#fff3e0',
    
    // Shadows
    cardShadow: isDark ? '0 28px 55px rgba(0,0,0,0.45)' : '0 8px 30px rgba(0,0,0,0.08)',
    
    // Icon buttons
    iconBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
    iconBorder: isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.1)',
    iconColor: isDark ? '#dce4f5' : '#4a5568',
    
    // Highlights
    highlightBg: isDark
      ? 'linear-gradient(135deg, rgba(255,159,26,0.14), rgba(255,159,26,0.08))'
      : 'linear-gradient(135deg, rgba(232,138,0,0.1), rgba(232,138,0,0.05))',
    highlightBorder: isDark ? 'rgba(255,159,26,0.3)' : 'rgba(232,138,0,0.25)',
    
    // Bullet/dot color  
    dotColor: isDark ? '#ff9f1a' : '#e88a00',
  };
};
