import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform{
  transform (skills,value) {
    return skills.filter(skill => {
      return skill.name.includes(value)
    })
  }
}
