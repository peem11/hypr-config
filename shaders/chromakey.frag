// Simple Chroma Key Shader
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 color = texture2D(tex, v_texcoord);

    // Target the background color. 
    // If background is black (0.0, 0.0, 0.0)
    if (color.r < 0.05 && color.g < 0.05 && color.b < 0.05) {
        discard; // Make the pixel completely transparent
    }

    gl_FragColor = color;
}
