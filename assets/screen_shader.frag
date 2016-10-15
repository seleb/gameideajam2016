precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float time;
uniform float irritation;
uniform bool flip;

float rand(float x, float y){
  return fract(sin(dot(vec2(x,y) ,vec2(12.9898,78.233))) * 43758.5453);
}

void main(void){
	float v=0.;
	vec2 uvs = vTextureCoord.xy;
	vec4 fg = texture2D(uSampler, uvs);
	v+=fg.r;
	uvs.y += (rand(uvs.y+time,uvs.x+time)-0.5)*0.001*irritation;
	uvs.x += (rand(uvs.x+time,uvs.y+time)-0.5)*0.001*irritation;
	fg+=texture2D(uSampler, uvs);
	fg.rgb+=vec3(rand(uvs.x+time,v+time)*irritation/5.0);
	v+=fg.r;
	fg=(v < 1.99 != flip) ? vec4(1.0) : vec4(0.0,0.0,0.0,1.0);
	gl_FragColor = fg;
}