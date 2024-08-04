function standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[328,-199],"radius":2.5})
.union(
    CAG.circle({"center":[220,-200],"radius":2.5})
).union(
    CAG.circle({"center":[100,-199],"radius":2.5})
).union(
    CAG.circle({"center":[320,-157],"radius":2.5})
).union(
    CAG.circle({"center":[264,-157],"radius":2.5})
).union(
    CAG.circle({"center":[200,-123],"radius":2.5})
).union(
    CAG.circle({"center":[108,-123],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[328,-199],"radius":1.5})
.union(
    CAG.circle({"center":[220,-200],"radius":1.5})
).union(
    CAG.circle({"center":[100,-199],"radius":1.5})
).union(
    CAG.circle({"center":[320,-157],"radius":1.5})
).union(
    CAG.circle({"center":[264,-157],"radius":1.5})
).union(
    CAG.circle({"center":[200,-123],"radius":1.5})
).union(
    CAG.circle({"center":[108,-123],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[87,-215.5],[87,-102.5]]).appendPoint([249.6,-102.5]).appendPoint([249.6,-136.5]).appendPoint([341,-136.5]).appendPoint([341,-215.5]).appendPoint([87,-215.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_6_outline_fn(){
    return new CSG.Path2D([[87,-215.5],[87,-102.5]]).appendPoint([249.6,-102.5]).appendPoint([249.6,-136.5]).appendPoint([341,-136.5]).appendPoint([341,-215.5]).appendPoint([87,-215.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 6] });
}


function board_extrude_6_outline_fn(){
    return new CSG.Path2D([[88,-212.9],[88,-103.5]]).appendPoint([246.4,-103.5]).appendPoint([246.4,-137.5]).appendPoint([340,-137.5]).appendPoint([340,-212.9]).appendPoint([88,-212.9]).close().innerToCAG()
.extrude({ offset: [0, 0, 6] });
}


function resetHole_extrude_4_outline_fn(){
    return CAG.circle({"center":[230,-150],"radius":1.5})
.extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _xlBottom_case_fn() {
                    

                // creating part 0 of case _xlBottom
                let _xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _xlBottom__part_0_bounds = _xlBottom__part_0.getBounds();
                let _xlBottom__part_0_x = _xlBottom__part_0_bounds[0].x + (_xlBottom__part_0_bounds[1].x - _xlBottom__part_0_bounds[0].x) / 2
                let _xlBottom__part_0_y = _xlBottom__part_0_bounds[0].y + (_xlBottom__part_0_bounds[1].y - _xlBottom__part_0_bounds[0].y) / 2
                _xlBottom__part_0 = translate([-_xlBottom__part_0_x, -_xlBottom__part_0_y, 0], _xlBottom__part_0);
                _xlBottom__part_0 = rotate([0,0,0], _xlBottom__part_0);
                _xlBottom__part_0 = translate([_xlBottom__part_0_x, _xlBottom__part_0_y, 0], _xlBottom__part_0);

                _xlBottom__part_0 = translate([0,0,0], _xlBottom__part_0);
                let result = _xlBottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _resetHole_case_fn() {
                    

                // creating part 0 of case _resetHole
                let _resetHole__part_0 = resetHole_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _resetHole__part_0_bounds = _resetHole__part_0.getBounds();
                let _resetHole__part_0_x = _resetHole__part_0_bounds[0].x + (_resetHole__part_0_bounds[1].x - _resetHole__part_0_bounds[0].x) / 2
                let _resetHole__part_0_y = _resetHole__part_0_bounds[0].y + (_resetHole__part_0_bounds[1].y - _resetHole__part_0_bounds[0].y) / 2
                _resetHole__part_0 = translate([-_resetHole__part_0_x, -_resetHole__part_0_y, 0], _resetHole__part_0);
                _resetHole__part_0 = rotate([0,0,0], _resetHole__part_0);
                _resetHole__part_0 = translate([_resetHole__part_0_x, _resetHole__part_0_y, 0], _resetHole__part_0);

                _resetHole__part_0 = translate([0,0,0], _resetHole__part_0);
                let result = _resetHole__part_0;
                
            
                    return result;
                }
            
            

                function printCase_case_fn() {
                    

                // creating part 0 of case printCase
                let printCase__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let printCase__part_0_bounds = printCase__part_0.getBounds();
                let printCase__part_0_x = printCase__part_0_bounds[0].x + (printCase__part_0_bounds[1].x - printCase__part_0_bounds[0].x) / 2
                let printCase__part_0_y = printCase__part_0_bounds[0].y + (printCase__part_0_bounds[1].y - printCase__part_0_bounds[0].y) / 2
                printCase__part_0 = translate([-printCase__part_0_x, -printCase__part_0_y, 0], printCase__part_0);
                printCase__part_0 = rotate([0,0,0], printCase__part_0);
                printCase__part_0 = translate([printCase__part_0_x, printCase__part_0_y, 0], printCase__part_0);

                printCase__part_0 = translate([0,0,0], printCase__part_0);
                let result = printCase__part_0;
                
            

                // creating part 1 of case printCase
                let printCase__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let printCase__part_1_bounds = printCase__part_1.getBounds();
                let printCase__part_1_x = printCase__part_1_bounds[0].x + (printCase__part_1_bounds[1].x - printCase__part_1_bounds[0].x) / 2
                let printCase__part_1_y = printCase__part_1_bounds[0].y + (printCase__part_1_bounds[1].y - printCase__part_1_bounds[0].y) / 2
                printCase__part_1 = translate([-printCase__part_1_x, -printCase__part_1_y, 0], printCase__part_1);
                printCase__part_1 = rotate([0,0,0], printCase__part_1);
                printCase__part_1 = translate([printCase__part_1_x, printCase__part_1_y, 0], printCase__part_1);

                printCase__part_1 = translate([0,0,0], printCase__part_1);
                result = result.subtract(printCase__part_1);
                
            

                // creating part 2 of case printCase
                let printCase__part_2 = _xlBottom_case_fn();

                // make sure that rotations are relative
                let printCase__part_2_bounds = printCase__part_2.getBounds();
                let printCase__part_2_x = printCase__part_2_bounds[0].x + (printCase__part_2_bounds[1].x - printCase__part_2_bounds[0].x) / 2
                let printCase__part_2_y = printCase__part_2_bounds[0].y + (printCase__part_2_bounds[1].y - printCase__part_2_bounds[0].y) / 2
                printCase__part_2 = translate([-printCase__part_2_x, -printCase__part_2_y, 0], printCase__part_2);
                printCase__part_2 = rotate([0,0,0], printCase__part_2);
                printCase__part_2 = translate([printCase__part_2_x, printCase__part_2_y, 0], printCase__part_2);

                printCase__part_2 = translate([0,0,0], printCase__part_2);
                result = result.union(printCase__part_2);
                
            

                // creating part 3 of case printCase
                let printCase__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let printCase__part_3_bounds = printCase__part_3.getBounds();
                let printCase__part_3_x = printCase__part_3_bounds[0].x + (printCase__part_3_bounds[1].x - printCase__part_3_bounds[0].x) / 2
                let printCase__part_3_y = printCase__part_3_bounds[0].y + (printCase__part_3_bounds[1].y - printCase__part_3_bounds[0].y) / 2
                printCase__part_3 = translate([-printCase__part_3_x, -printCase__part_3_y, 0], printCase__part_3);
                printCase__part_3 = rotate([0,0,0], printCase__part_3);
                printCase__part_3 = translate([printCase__part_3_x, printCase__part_3_y, 0], printCase__part_3);

                printCase__part_3 = translate([0,0,0], printCase__part_3);
                result = result.union(printCase__part_3);
                
            

                // creating part 4 of case printCase
                let printCase__part_4 = _resetHole_case_fn();

                // make sure that rotations are relative
                let printCase__part_4_bounds = printCase__part_4.getBounds();
                let printCase__part_4_x = printCase__part_4_bounds[0].x + (printCase__part_4_bounds[1].x - printCase__part_4_bounds[0].x) / 2
                let printCase__part_4_y = printCase__part_4_bounds[0].y + (printCase__part_4_bounds[1].y - printCase__part_4_bounds[0].y) / 2
                printCase__part_4 = translate([-printCase__part_4_x, -printCase__part_4_y, 0], printCase__part_4);
                printCase__part_4 = rotate([0,0,0], printCase__part_4);
                printCase__part_4 = translate([printCase__part_4_x, printCase__part_4_y, 0], printCase__part_4);

                printCase__part_4 = translate([0,0,0], printCase__part_4);
                result = result.subtract(printCase__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return printCase_case_fn();
            }

        