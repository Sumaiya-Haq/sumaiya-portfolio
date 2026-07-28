export const fireflyVertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aScale;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime + modelPosition.x * 100.0) * 0.2;
    modelPosition.x += cos(uTime + modelPosition.z * 100.0) * 0.15;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    gl_PointSize = aScale * uPixelRatio * (1.0 / -viewPosition.z);
  }
`;

export const fireflyFragmentShader = `
  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / distanceToCenter - 0.1;
    
    gl_FragColor = vec4(0.13, 0.82, 0.93, strength);
  }
`;
