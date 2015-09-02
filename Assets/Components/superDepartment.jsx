import React from 'react';
import SubDepartment from "./subDepartment";
var currentTarget;

class SuperDepartment extends React.Component {
    renderDepartment(menuItems,e){
        document.getElementById('aisle').style.display='none';
        var department = e.currentTarget.text;
        var departments = [];
        for (var i = 0; i<= menuItems.length - 1; i++) {
            var item = menuItems[i];
            if(item.catId == null && item.parent== department)
            {
                departments.push(item);
            }
        };

        console.log(departments);
        React.render(<SubDepartment departments={departments} menuItems={menuItems} />, currentTarget);
    }
    render() {
        var self=this;
        var superDepartment = [];
        for (var i=0; i < this.props.menuItems.length ; i++) {
                var item = this.props.menuItems[i];
                if(item.catId == null && item.parent==null){
                    superDepartment.push(item);
            }
        };
        document.getElementById('departmentMenu').style.display='block';

        
        var superDepartmentMenu = superDepartment.map(function(sd){
            return  (<li><a data-toggle="dropdown" className="dropdown-toggle" href="#" onClick={self.renderDepartment.bind(this,self.props.menuItems)}>{sd.name}<b className="caret"></b></a></li>);

        });
        return (<ul role="menu" className="dropdown-menu">
                {superDepartmentMenu}
            </ul>
        )
    }
}
export default SuperDepartment;