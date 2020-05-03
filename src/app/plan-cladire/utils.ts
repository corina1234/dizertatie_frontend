
export function isOpenSpaceSelectedStyle(room, camera){
    if(room == camera){
        return {'fill': 'lightgrey', 'fill-opacity': '100%'};
    } else {
        return {};
    }
}

export function mouseEnter($event, renderer, divElement, data): void {
    var x = $event.clientX - 200 + 'px';
    var y = $event.clientY - 200 + 'px';
    renderer.setStyle(divElement.nativeElement, 'left', x);
    renderer.setStyle(divElement.nativeElement, 'top', y);
    renderer.setStyle(divElement.nativeElement, 'display', 'block');
    renderer.setProperty(divElement.nativeElement, 'innerHTML', data);
}

export function mouseLeave($event, renderer, divElement): void {
    renderer.setProperty(divElement.nativeElement, 'innerHTML', '');
    renderer.setStyle(divElement.nativeElement, 'display', 'none');
}

export function getDataHtml(officeData){
    return `<div class="col-12">
                    <span style="font-size: 10px">Nume camera</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + officeData.name + `</p>
                    <span style="font-size: 10px">Tip camera</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + officeData.type +` </p>
                    <span style="font-size: 10px">Departament</span>
                    <p style="font-weight: bold;">` + officeData.department.name + `(` + officeData.department.code + `) </p>
                </div>`;
}

export function getOfficeInfo(officeData, parentName){
    if(officeData.employee){
        return `
                <div class="col-12">
                    <span style="font-size: 10px">Nume camera</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + officeData.name + `</p>
                    <span style="font-size: 10px">Departament</span>
                    <p  style="font-weight: bold; margin-bottom: 2px">` + parentName +`</p>
                    <span style="font-size: 10px">Angajat</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + officeData.employee.name + `
                    </p>
                    <span style="font-size: 10px">Functie</span>
                    <p style="font-weight: bold">` + officeData.employee.job.name + `</p>
                </div>`;
    } else {
        return `<div class="col-12">
                    <span style="font-size: 10px">Nume camera</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + officeData.name + `</p>
                    <span style="font-size: 10px">Departament</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + parentName +`</p>
                    <span style="font-size: 10px">Stare</span>
                    <p style="font-weight: bold;">Liber</p>
                </div>`;
    }

}

export function getDataMeetingRoomHtml(meetingRoom){
    return `<div class="col-12">
                    <span style="font-size: 10px">Sala sedinte</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + meetingRoom.name + `</p>
                    <span style="font-size: 10px">Cod</span>
                    <p style="font-weight: bold; margin-bottom: 2px">` + meetingRoom.codeId + `</p>
                    <span style="font-size: 10px">Capacitate (pers)</span>
                    <p style="font-weight: bold;">` + meetingRoom.maxNoPersons + ` </p>
                </div>`;
}
