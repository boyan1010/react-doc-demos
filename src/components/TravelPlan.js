import { useState } from "react";
import { initialTravelPlan } from "../public/place";
// title button
// - child1 button
// - child2 button
function PlanTree({ allPlans, id, onComplete, parentId }) {
  const place = allPlans[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      <ol>
        {childIds.map((childId) => {
          return (
            <PlanTree
              id={childId}
              allPlans={allPlans}
              key={childId}
              parentId={id}
              onComplete={onComplete}
            ></PlanTree>
          );
        })}
      </ol>
    </li>
  );
}
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  function onComplete(parentId, id) {
    const parent = plan[parentId];
    console.log(parent);
    const data = {
      ...parent,
      childIds: parent.childIds.filter((childId) => childId !== id)
    };

    setPlan({
      ...plan,
      [parentId]: data
    });
  }
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h3>Places to visit</h3>
      <ol>
        {planetIds.map((planetId) => {
          return (
            <PlanTree
              key={planetId}
              allPlans={plan}
              id={planetId}
              parentId={root.id}
              onComplete={onComplete}
            ></PlanTree>
          );
        })}
      </ol>
    </>
  );
}
