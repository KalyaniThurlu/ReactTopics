
const Skills = () => {
  const skills = [
    { name: "html", level: "90" },
    { name: "css", level: "85" },
    { name: "javascript", level: "80" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{marginLeft:"",textAlign:"center"}}>this is my skills</h1>
      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>{skill.name}</label>
          <div
            style={{
              height: "20px",
              borderRadius: "10px",
              backgroundColor: "white",
              marginTop: "5px",
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                padding: "10px",
                backgroundColor: "lightblue",
                fontSize: "14px",
                textAlign: "right",
                borderRadius: "10px",
                lineHeight: "20px",
              }}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
