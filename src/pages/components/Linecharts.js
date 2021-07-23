import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default (props) => {
    const [
        dataLine
    ] = useState (
        {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Conso. annuel",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(184, 185, 210, .3)",
                borderColor: "rgb(35, 26, 136)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgb(35, 26, 136)",
                pointBackgroundColor: "rgb(255, 255, 255)",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(0, 0, 0)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10000, 50000, 100000, 200000, 150000, 120000, 250000]
              }
            ]
        }
    )

    return (
        <>
        <MDBContainer>
          <Line data={dataLine} options={{ responsive: true }} />
        </MDBContainer>
        </>
    );
}