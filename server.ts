import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
  try {
    const clients = await prisma.client.findMany();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

app.get("/user/:id", async (req, res) => {
  const clientId = Number(req.params.id);
  const client = await prisma.client.findFirst({
    where: {
      id: clientId,
    },
  });
  return res.json(client);
}),
  app.post("/user", async (req, res) => {
    const { name, email } = req.body;
    const cliente = await prisma.client.create({
      data: {
        name,
        email,
      },
    });
    return res.json(cliente);
  });

app.put("/user/:id", async (req, res) => {
  const { name, email } = req.body;
  const userId = Number(req.params.id);

  try {
    const updatedUser = await prisma.client.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

app.delete("/user/:id", async (req, res) => {
  const userId = Number(req.params.id);

  try {
    await prisma.client.delete({
      where: {
        id: userId,
      },
    });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Not Found" });
  }
});

app.listen(5555, () => console.log("Running"));
