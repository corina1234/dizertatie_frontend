
export function isOpenSpaceSelectedStyle(room, camera){
    if(room == camera){
        return {'fill': 'lightgrey', 'fill-opacity': '100%'};
    } else {
        return {};
    }
}

export function mouseEnter($event, renderer, divElement, data): void {
    console.log($event)
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
    return `<div class="row">
                    <div class="col-md-6" style="font-weight: bold">Nume camera: </div>
                    <div class="col-md-6">` + officeData.name + `</div>
                </div>
                <div class="row">
                    <div class="col-md-6" style="font-weight: bold">Tip camera: </div>
                    <div class="col-md-6">` + officeData.type +`
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" style="font-weight: bold">Departament: </div>
                    <div class="col-md-6">` + officeData.department.name + `(` + officeData.department.code + `)
                    </div>
                </div>`;
}
