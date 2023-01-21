package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.CompagnieService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Compagnie;
import com.ana.test.ws.rest.provided.converter.CompagnieConverter;
import com.ana.test.ws.rest.provided.vo.CompagnieVo;


@Api("Manages Compagnie services")
@RestController
@RequestMapping("compagnie")
public class CompagnieRest {

    @Autowired
    private CompagnieService compagnieService;

    @Autowired
    private CompagnieConverter compagnieConverter;



       @ApiOperation("Finds a list of all Compagnies")
       @GetMapping("/")
       public List<CompagnieVo> findAll(){
           return compagnieConverter.toVo(compagnieService.findAll());
       }


       @ApiOperation("Finds a list of all Compagnies with pagination")
       @GetMapping("/paginate/")
       public Page<CompagnieVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Compagnie> paginate = compagnieService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), compagnieConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Compagnie")
       @PostMapping("/")
       public CompagnieVo save(@RequestBody  CompagnieVo  entityVo){
        Compagnie entity = compagnieConverter.toItem(entityVo);
           entity = compagnieService.save(entity);
        return compagnieConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Compagnie")
       @PutMapping("/")
       public CompagnieVo update(@RequestBody  CompagnieVo  entityVo){
        Compagnie entity = compagnieConverter.toItem(entityVo);
           entity = compagnieService.update(entity);
        return compagnieConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Compagnie By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return compagnieService.deleteById(id);
       }

       @ApiOperation("find the specified Compagnie By Id")
       @GetMapping("/{id}/")
       public CompagnieVo findById(@PathVariable Long id){
           return compagnieConverter.toVo( compagnieService.findById(id));
       }

       @ApiOperation("find the specified Compagnie By Code")
       @GetMapping("/code/{reference}/")
        public CompagnieVo findByCode(String reference) {
        return compagnieConverter.toVo( compagnieService.findByCode(reference));
       }




}