import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(
    (itemsValue) => itemsValue.value
  );
 //console.log(props.dataPoints);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(dataPointValues);
  console.log(totalMaximum)
  return (
    <div className="chart">
      
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
     ))}
    </div>
  );
};

export default Chart;
