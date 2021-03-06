const CVFooter = ({ infos }) => {
  return (
    <div className="references flex">
      <h2>Contact</h2>
      <p>
        {infos.firstname} {infos.lastname} | {infos.email} | {infos.mobile}{" "}
      </p>
      <p>References available on request</p>
    </div>
  );
};

export default CVFooter;
