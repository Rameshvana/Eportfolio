import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample(A) {

  const now = 85;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;