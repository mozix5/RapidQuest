import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomBarChart = () => {
  const data = [
    {
      name: 20,
      Employer: 20,
      Employee: 20,
      totalInterest: 20,
    },
    {
      name: "",
      totalInterest: 25,
      Employer: 25,
      Employee: 25,
    },
    {
      name: 25,
      totalInterest: 35,
      Employer: 35,
      Employee: 35,
    },
    {
      name: "",
      totalInterest: 45,
      Employer: 45,
      Employee: 45,
    },
    {
      name: "30",
      totalInterest: 50,
      Employer: 50,
      Employee: 50,
    },
    {
      name: "",
      totalInterest: 60,
      Employer: 60,
      Employee: 60,
    },
    {
      name: 35,
      totalInterest: 60,
      Employer: 80,
      Employee: 80,
    },
    {
      name: "",
      totalInterest: 90,
      Employer: 70,
      Employee: 90,
    },
    {
      name: 40,
      totalInterest: 100,
      Employer: 100,
      Employee: 80,
    },
    {
      name: "",
      totalInterest: 90,
      Employer: 110,
      Employee: 110,
    },
    {
      name: 60,
      totalInterest: 120,
      Employer: 120,
      Employee: 100,
    },
    {
      name: "",
      totalInterest: 130,
      Employer: 100,
      Employee: 130,
    },
    {
      name: 65,
      totalInterest: 140,
      Employer: 120,
      Employee: 135,
    },
  ];
  const Legend = ({color,type,value}) => {
    return (
      <div className="flex flex-1 items-center gap-2">
        <div className={`w-3 h-2 rounded-xl`} style={{background:color}}></div>
        <div className="text-xs">{type}:</div>
        <div>K {value}</div>
      </div>
    );
  };
  return (
    <div className="h-[25vh] w-full ">
      <div className="flex py-4">
        <Legend color='#0800a3' type='Employer' value='73,500'/>
        <Legend color='#4935ff' type='Employee' value='52,500'/>
        <Legend color='#85afff' type='Total Interest' value='244,313'/>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: -25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            ticks={[0,100, 200, 300, 400]}
          />
          <Tooltip />
          {/* <Legend verticalAlign='top' align='left' iconType='circle'/> */}
          <Bar dataKey="Employer" stackId="a" fill="#0800a3" barSize={20} />
          <Bar dataKey="Employee" stackId="a" fill="#4935ff" barSize={20} />
          <Bar
            dataKey="totalInterest"
            stackId="a"
            fill="#85afff"
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
