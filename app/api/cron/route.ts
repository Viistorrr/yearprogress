export async function getDate(){
  console.log("test");
  const response =  await fetch('/api/hello');
  console.log('RESPONSE', response);
}