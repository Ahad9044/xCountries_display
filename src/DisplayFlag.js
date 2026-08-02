export default function ({ flagData }) {
  console.log(flagData);
  const { name, flag, abbr } = flagData;
  return (
    <>
      <div className="display-flag">
        <img className="image" src={flag} alt="" />
        <h3> {name} </h3>
      </div>
    </>
  );
}
