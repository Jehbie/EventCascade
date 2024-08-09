export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { connectToDatabase, registerModels } = await import(
      "./lib/database"
    );

    await connectToDatabase();
    await registerModels();
  }
}
