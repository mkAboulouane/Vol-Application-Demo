package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.VolService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Vol;
import com.ana.test.ws.rest.provided.converter.VolConverter;
import com.ana.test.ws.rest.provided.vo.VolVo;


@Api("Manages Vol services")
@RestController
@RequestMapping("vol")
public class VolRest {

    @Autowired
    private VolService volService;

    @Autowired
    private VolConverter volConverter;



       @ApiOperation("Finds a list of all Vols")
       @GetMapping("/")
       public List<VolVo> findAll(){
           return volConverter.toVo(volService.findAll());
       }


       @ApiOperation("Finds a list of all Vols with pagination")
       @GetMapping("/paginate/")
       public Page<VolVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Vol> paginate = volService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), volConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Vol")
       @PostMapping("/")
       public VolVo save(@RequestBody  VolVo  entityVo){
        Vol entity = volConverter.toItem(entityVo);
           entity = volService.save(entity);
        return volConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Vol")
       @PutMapping("/")
       public VolVo update(@RequestBody  VolVo  entityVo){
        Vol entity = volConverter.toItem(entityVo);
           entity = volService.update(entity);
        return volConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Vol By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return volService.deleteById(id);
       }

       @ApiOperation("find the specified Vol By Id")
       @GetMapping("/{id}/")
       public VolVo findById(@PathVariable Long id){
           return volConverter.toVo( volService.findById(id));
       }

       @ApiOperation("Search Vol by a specific criteria")
       @PostMapping("/search")
       public List<VolVo> findByCriteria(@RequestBody VolVo entity) {
          return volConverter.toVo(volService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Vol By NumVol")
       @GetMapping("/numvol/{reference}/")
        public VolVo findByNumVol(String reference) {
        return volConverter.toVo( volService.findByNumVol(reference));
       }




}