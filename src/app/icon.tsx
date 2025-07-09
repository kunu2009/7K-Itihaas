import type { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#FF9933',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0D0D0D',
          borderRadius: '8px',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
        }}
      >
        इ
      </div>
    ),
    {
      ...size,
    }
  );
}
