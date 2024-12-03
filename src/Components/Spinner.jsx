import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Spinner animation="border" role="status" className="text-center">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;
