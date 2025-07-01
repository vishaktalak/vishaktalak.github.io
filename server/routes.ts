import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for resume download
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, '..', 'attached_assets', 'Vishakh_Talak_Resume_1751306802227.pdf');
    
    // Check if file exists
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Vishakh_Talak_Resume.pdf"');
      
      // Stream the PDF file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: 'Resume file not found' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
