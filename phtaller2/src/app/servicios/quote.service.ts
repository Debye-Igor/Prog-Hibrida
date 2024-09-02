import { Injectable } from '@angular/core';
import { Quote } from './quote.interface';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteDBConnection
  plataforma: string = ""

  // Configuración de la base de datos
  private readonly DB_NAME = 'quotesDB'
  private readonly DB_ENCRIPTADA = false
  private readonly DB_MODE = 'no-encryption'
  private readonly DB_VERSION = 1
  private readonly DB_READ_ONLY = false
  private readonly DB_SQL_TABLAS = `
    CREATE TABLE IF NOT EXISTS ${this.DB_NAME} (
      id INTEGER PRIMARY KEY NOT NULL,
      text TEXT NOT NULL,
      autor TEXT NOT NULL
    );
  `;

  constructor() { 
    this.sqlite = new SQLiteConnection(CapacitorSQLite)
    this.iniciarPlugin()
  }

  private async _iniciarPluginWeb(): Promise<void> {
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector('jeep-sqlite')
    if (jeepSqliteEl != null) {
      await this.sqlite.initWebStore()
    }
  }

  async iniciarPlugin() {
    this.plataforma = Capacitor.getPlatform()

    if (this.plataforma === 'web') {
      await this._iniciarPluginWeb()
    }

    await this.abrirConexion()
    if (this.db) {
      await this.db.execute(this.DB_SQL_TABLAS)
    }
  }

  async abrirConexion() {
    const ret = await this.sqlite.checkConnectionsConsistency()
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_ENCRIPTADA)).result

    if (ret.result && isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_ENCRIPTADA)
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }

    if (this.db) {
      await this.db.open()
    } 
  }

  async addQuote(quote: Quote): Promise<void> {
    if (!this.db) return

    const sql = `INSERT INTO ${this.DB_NAME} (text, autor) VALUES (?, ?)`
    const values = [quote.text, quote.autor]
    await this.db.run(sql, values)

    if (this.plataforma === 'web') {
      await this.sqlite.saveToStore(this.DB_NAME)  // Asegura que los cambios se guarden en IndexedDB
    }
  }

  async getAllQuotes(): Promise<Quote[]> {
   // if (!this.db) return []

    const result = await this.db.query(`SELECT * FROM ${this.DB_NAME}`)
    
   /* if (this.plataforma === 'web') {
      await this.sqlite.saveToStore(this.DB_NAME)  // persistencia de los datos
    }*/
    
    return result.values || []
  }

  async deleteQuote(id: number): Promise<void> {
    if (!this.db) return

    const sql = `DELETE FROM ${this.DB_NAME} WHERE id = ?`
    const values = [id]
    await this.db.run(sql, values)

    if (this.plataforma === 'web') {
      await this.sqlite.saveToStore(this.DB_NAME)  // Asegura que los cambios se guarden en IndexedDB
    }
  }

  async getRandomQuote(): Promise<Quote | undefined> {
    await this.iniciarPlugin() // Para que se inicie y muestre la cita
    const quotes = await this.getAllQuotes()
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}
}



/* 
  getRandomQuote(): Quote{
    const randomIndex = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomIndex]
  }

  getAllQuotes():Quote[]{
    return this.quotes;
  }

  addQuote(quote: Quote){
    this.quotes.push(quote);
    console.log("Citas actualizada:", this.quotes)
  }
*/
  

