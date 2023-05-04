export const config = {
  minFiles: 10,
  useMock: true,
  transformControls: {
    t: (control) => control.setMode("translate"),
    r: (control) => control.setMode("rotate"),
    s: (control) => control.setMode("scale"),
    q: (control) => control.setSize(Math.max(control.size - 0.1, 0.1)),
    e: (control) => control.setSize(Math.max(control.size + 0.1, 0.1)),
  },
};
