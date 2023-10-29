function DessertsList(props) {
  // Implement the component here.
  const desserts = props.data.filter(dessert => dessert.calories < 500)
  desserts.sort((a, b) => a.calories - b.calories)
  return (
    <ul>
      {
        desserts.map(dessert => (
          <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li>
        ))
      }
    </ul>
  );
}

export default DessertsList;
