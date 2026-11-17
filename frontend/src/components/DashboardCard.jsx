function DashboardCard(props) {
  return (
    <div className="dashboard-card" style={{ backgroundColor: props.color }}>
      <h2>{props.number}</h2>
      <p>{props.title}</p>
    </div>
  );
}

export default DashboardCard;