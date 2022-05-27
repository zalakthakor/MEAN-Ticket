import express from "express";
import {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  getTicketsByName,
} from "../controllers/tickets.js";
const router = express.Router();
import auth from "../middleware/authservice.js";

router.post("/",auth,createTicket);
router.get("/", getTickets);
router.patch("/:id",updateTicket);
router.post("/delete",auth,deleteTicket);
router.get("/search",getTicketsByName);
export default router;
