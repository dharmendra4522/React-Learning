function Profile() {
  const [name, setName] = useState("Dharm");
  const [age, setAge] = useState(23);

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Birthday 🎉</button>
    </div>
  );
}
export default Profile;