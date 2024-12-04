if (import.meta.main) main();

async function main() {
  const data = await Deno.readTextFile("public/data.txt")

  console.log(data)
}