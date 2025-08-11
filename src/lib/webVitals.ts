import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { event } from './gtag';

// Función para reportar métricas de Core Web Vitals
function sendToAnalytics(metric: {
  name: string;
  id: string;
  value: number;
}) {
  // Enviar a Google Analytics
  event({
    action: metric.name,
    category: 'Web Vitals',
    label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  });

  // También podemos enviar a otros servicios de análisis
  console.log('Web Vitals Metric:', metric);
}

// Inicializar tracking de Web Vitals
export function initWebVitals() {
  if (typeof window !== 'undefined') {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // INP reemplazó a FID
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }
}

// Hook personalizado para usar en componentes
export function reportWebVitals(metric: {
  name: string;
  id: string;
  value: number;
}) {
  sendToAnalytics(metric);
}