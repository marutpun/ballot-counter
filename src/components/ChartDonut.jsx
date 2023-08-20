import { onMount } from 'solid-js';
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'solid-chartjs';

import { useBallot } from '../contexts/BallotContext';

export default function ChartDonut() {
  const [ballot] = useBallot();

  const newCandidateArr = [...new Set(ballot.candidate.map((candidate) => candidate.name).flat())];
  const newCandidateScore = [...new Set(ballot.candidate.map((candidate) => candidate.score).flat())];
  const chartData = {
    labels: newCandidateArr,
    datasets: [
      {
        label: 'Total vote',
        data: newCandidateScore,
        // backgroundColor: [`#${Math.floor(Math.random() * 16777215).toString(16)}`],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: false,
    maintainAspectRatio: false,
  };

  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
    console.log(ballot.candidate);
  });

  if (ballot.candidate.length === 0) {
    return <p>No candidate or no score</p>;
  }

  return <Pie data={chartData} options={chartOptions} width={500} height={500} />;
}
