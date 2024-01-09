export default async () => {
    const name = [
      { 
        school: "日本大学文理学部",
        myName: "张松"
      }
    ];
    return new Response(JSON.stringify(name));
  };