import fs from "fs"
import path from "path"
import * as yaml from "js-yaml"
export default class ModLoader {
  constructor(camera, scene, renderer) {
    this.path = require("path")
  }
  loadMods() {
    this.mods = this.getMods()
    this.mods.forEach(mod => {this.loadMod(mod)})
  }
  loadMod(modConfig) {
    // let mod = require(path.join("mods", modConfig.path, modConfig.main)).main
    let mod = require("./mods/player/main.js").main
    new mod(this.camera, this.scene, this.renderer)
  }
  getMods() {
    let mods = []
    console.log(__dirname)
    this.modsDir = path.join(__dirname, 'mods');
    this.modsDirContents = fs.readdirSync(this.modsDir)
    this.modsDirContents.forEach(item => {
      let pathToMod = path.join(__dirname, "mods", item)
      if (fs.lstatSync(pathToMod).isDirectory()) {
        let config = this.loadConfig(pathToMod)
        config.path = item
        mods.push(config)
      }
    })
    return mods
  }
  loadConfig(modDir) {
    let file = fs.readFileSync(path.join(modDir, "config.yml"))
    return yaml.load(file)
  }
}
