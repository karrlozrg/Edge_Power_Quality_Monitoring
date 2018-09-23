var g1 = new JustGage({
  id: "gauge1",
  value: getRandomInt(90, 100),
  min: 0,
  max: 100,
  title: "Line 1",
  label: "cos(phi)%",
  customSectors: [
    {
      color: "#00ff00",
      lo: 95,
      hi: 100
    },
    {
      color: "#ff0000",
      lo: 0,
      hi: 95
    }
  ]
});
var g2 = new JustGage({
  id: "gauge2",
  value: getRandomInt(90, 100),
  min: 0,
  max: 100,
  title: "Line 2",
  label: "cos(phi)%",
  customSectors: [
    {
      color: "#00ff00",
      lo: 95,
      hi: 100
    },
    {
      color: "#ff0000",
      lo: 0,
      hi: 95
    }
  ]
});
var g3 = new JustGage({
  id: "gauge3",
  value: getRandomInt(0, 100),
  min: 0,
  max: 100,
  title: "Line 3",
  label: "cos(phi)%",
  customSectors: [
    {
      color: "#00ff00",
      lo: 95,
      hi: 100
    },
    {
      color: "#ff0000",
      lo: 0,
      hi: 95
    }
  ]
});
