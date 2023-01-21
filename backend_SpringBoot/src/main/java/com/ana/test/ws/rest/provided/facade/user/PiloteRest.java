package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.PiloteService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Pilote;
import com.ana.test.ws.rest.provided.converter.PiloteConverter;
import com.ana.test.ws.rest.provided.vo.PiloteVo;


@Api("Manages Pilote services")
@RestController
@RequestMapping("pilote")
public class PiloteRest {

    @Autowired
    private PiloteService piloteService;

    @Autowired
    private PiloteConverter piloteConverter;



       @ApiOperation("Finds a list of all Pilotes")
       @GetMapping("/")
       public List<PiloteVo> findAll(){
           return piloteConverter.toVo(piloteService.findAll());
       }


       @ApiOperation("Finds a list of all Pilotes with pagination")
       @GetMapping("/paginate/")
       public Page<PiloteVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Pilote> paginate = piloteService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), piloteConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Pilote")
       @PostMapping("/")
       public PiloteVo save(@RequestBody  PiloteVo  entityVo){
        Pilote entity = piloteConverter.toItem(entityVo);
           entity = piloteService.save(entity);
        return piloteConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Pilote")
       @PutMapping("/")
       public PiloteVo update(@RequestBody  PiloteVo  entityVo){
        Pilote entity = piloteConverter.toItem(entityVo);
           entity = piloteService.update(entity);
        return piloteConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Pilote By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return piloteService.deleteById(id);
       }

       @ApiOperation("find the specified Pilote By Id")
       @GetMapping("/{id}/")
       public PiloteVo findById(@PathVariable Long id){
           return piloteConverter.toVo( piloteService.findById(id));
       }

       @ApiOperation("Search Pilote by a specific criteria")
       @PostMapping("/search")
       public List<PiloteVo> findByCriteria(@RequestBody PiloteVo entity) {
          return piloteConverter.toVo(piloteService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Pilote By Matricule")
       @GetMapping("/matricule/{reference}/")
        public PiloteVo findByMatricule(String reference) {
        return piloteConverter.toVo( piloteService.findByMatricule(reference));
       }




}