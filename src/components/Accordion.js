import { useState } from "react";

const panelList = [
  {
    title: "About",
    content: `With a population of about 2 million, Almaty is Kazakhstan's largest
  city. From 1929 to 1997, it was its capital city.`
  },
  {
    title: "Etymology",
    content: `The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
  "apple" and is often translated as "full of apples". In fact, the region
  surrounding Almaty is thought to be the ancestral home of the apple, and
  the wild <i lang="la">Malus sieversii</i> is considered a likely
  candidate for the ancestor of the modern domestic apple.`
  },
  {
    title: "Category",
    content: `The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
  "apple" and is often translated as "full of apples". In fact, the region
  surrounding Almaty is thought to be the ancestral home of the apple, and
  the wild <i lang="la">Malus sieversii</i> is considered a likely
  candidate for the ancestor of the modern domestic apple.`
  }
];
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("activeIndex:--- ", activeIndex);
  function onClickShow(index) {
    console.log("idnex;000000000 ", index);
    setActiveIndex(index);
  }
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <div>
        {panelList.map((panel, index) => {
          return (
            <Panel
              title={panel.title}
              key={panel.title}
              isActive={activeIndex === index}
              onShow={() => onClickShow(index)}
            >
              With a population of about 2 million, Almaty is Kazakhstan's
              largest city. From 1929 to 1997, it was its capital city.
            </Panel>
          );
        })}
      </div>
    </>
  );
}

function Panel({ title, children, onShow, isActive }) {
  return (
    <>
      <h3>{title}</h3>
      <div>{children}</div>
      {!isActive && <button onClick={onShow}>Show</button>}
    </>
  );
}
